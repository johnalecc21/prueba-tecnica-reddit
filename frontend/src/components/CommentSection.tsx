import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ArrowBigUp, ArrowBigDown } from 'lucide-react'
import axios from 'axios';


interface Comment {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  votes: number;
  replies: Comment[]
}

const CommentSection = () => {
  const [newComment, setNewComment] = useState<string>(''); 
  const [comments, setComments] = useState<Comment[]>([]); 
  const [replyingTo, setReplyingTo] = useState<string | null>(null); 
  const [replyContent, setReplyContent] = useState<string>('');

  const handleComment = async () => {
    if (!newComment.trim()) return;
  
    const comment: Comment = {
      id: Date.now().toString(),
      content: newComment,
      author: 'You',
      timestamp: 'just now',
      votes: 0,
      replies: [],
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/comments/', {
        content: comment.content,
        author: comment.author,
        timestamp: comment.timestamp,
      });
      
      if (response.status === 200) {
        setComments([comment, ...comments]);
        setNewComment('');
      } else {
        console.error('Error al enviar el comentario');
      }
    } catch (error) {
      console.error('Hubo un error al hacer la solicitud:', error);
    }
  };

  const handleReply = (parentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      content: replyContent,
      author: 'You',
      timestamp: 'just now',
      votes: 0,
      replies: [],
    };


    const updateComments = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [reply, ...comment.replies], 
          };
        }
        return {
          ...comment,
          replies: updateComments(comment.replies), 
        };
      });
    };

    setComments(updateComments(comments));
    setReplyContent('');
    setReplyingTo(null);
  };

  const Comment = ({ comment, depth = 0 }: { comment: Comment; depth?: number }) => (
    <div className={`pl-${depth * 4} mt-4`}>
      <div className="flex gap-2">
        <div className="flex flex-col items-center">
          <button className="p-1 hover:bg-gray-200 rounded">
            <ArrowBigUp className="w-4 h-4 text-gray-400" />
          </button>
          <span className="text-xs">{comment.votes}</span>
          <button className="p-1 hover:bg-gray-200 rounded">
            <ArrowBigDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="font-bold">{comment.author}</span>
            <span>{comment.timestamp}</span>
          </div>
          <div className="my-2 text-sm" dangerouslySetInnerHTML={{ __html: comment.content }} />
          <button
            onClick={() => setReplyingTo(comment.id)}
            className="text-xs text-[#FF4500] hover:text-[#FF5722]"
          >
            Reply
          </button>

          {replyingTo === comment.id && (
            <div className="mt-2">
              <ReactQuill
                value={replyContent}
                onChange={setReplyContent}
                placeholder="What are your thoughts?"
                theme="snow"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setReplyingTo(null)}
                  className="px-4 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleReply(comment.id)}
                  className="px-4 py-1 text-sm text-white bg-[#FF4500] hover:bg-[#FF5722] rounded"
                >
                  Reply
                </button>
              </div>
            </div>
          )}

          {comment.replies.map(reply => (
            <Comment key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-md p-4">
      <div className="mb-4">
        <ReactQuill
          value={newComment}
          onChange={setNewComment}
          placeholder="What are your thoughts?"
          theme="snow"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleComment}
            className="px-4 py-1 text-sm text-white bg-[#FF4500] hover:bg-[#FF5722] rounded"
          >
            Comment
          </button>
        </div>
      </div>

      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;

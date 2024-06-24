// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom';

// Api Import
import postFeedBack from '../../api/POST/postFeedBack';

// Library Import
import { toast } from '../../imports/Library';

// Hooks Import
import useQueryMutation from '../../hooks/useQueryMutation';

// Default Function
export default function FeedBack() {
  const [pending, setPending] = useState(false);
  const { mutateAsync } = useQueryMutation({ mutation_func: postFeedBack});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.target);

    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
        await mutateAsync({ data });
        toast.success('Feedback submitted successfully!');
        event.target.reset();
    } catch (error) {
        toast.error(error.message);
    } finally {
        setPending(false);
    }
  };
  
  return (
    <div>
        <h3>Let's work together</h3>
        <Form 
          className='w-full h-fit feed-back flex flex-col'
          onSubmit={handleSubmit}
        >
          <input type="text" name="full_name" id="full_name" placeholder='Name *' required />
          <input type="email" name="email" id="email" placeholder='Email *' required />
          <input type="text" name="subject" id="subject *" placeholder='Subject *' required />
          <textarea className='w-full h-32' name='message' placeholder='Your Message *' required />
          <button 
            type="submit"
            disabled= {pending}
            className='my-3 w-full h-fit p-3 rounded-md capitalize text-md bg-secondary text-white shadow-md'
          >
            { pending ? <span className="loading loading-bars loading-md"></span> : 'send message' }
          </button>
        </Form>
    </div>
  )
}

import { toast } from 'react-hot-toast';

const notify = (message, type = 'success') => {
  switch (type) {
    case 'success':
      toast.success(message, {
        style: {
          background: '#030712',
          border: '2px solid #9333ea',
          color: 'white',
          textAlign: 'center',
        },
      });
      break;
    case 'error':
      toast.error(message, {
        style: {
            background: '#030712',
            border: '2px solid #9333ea',
            color: 'white',
          },
      });
      break;
    case 'loading':
        toast.loading(message, {
            style: {
                background: '#030712',
                border: '2px solid #9333ea',
                color: 'white',
              },
          });
      break;
    default:
      toast(message);
  }
};

export default notify;
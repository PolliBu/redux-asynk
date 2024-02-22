import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return <div>App</div>;
}

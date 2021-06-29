import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/**
 * 
 * @param type 
 * @param payload 
 */
export const useAppDispatch = (type: string, payload?: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type, payload })
  }, [type, payload, dispatch]);
};

/**
 * Keep the scroll of an element at the bottom
 * @param id The element id
 * @param depedency Value used to notify the hook of some change
 */
export const useKeepScrollDown = (id: any, depedency: any) => {
  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [id, depedency]);
};

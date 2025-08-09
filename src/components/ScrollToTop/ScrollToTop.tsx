import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoArrowUpCircle } from 'react-icons/io5';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ButtonContainer onClick={scrollToTop} visible={isVisible}>
      <IoArrowUpCircle size={40} color="#0056b3" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  cursor: pointer;
  z-index: 100;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export default ScrollToTopButton;

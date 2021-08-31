import styled from 'styled-components';
import Beer from '../assets/beers.png';
import RandomBg from '../assets/random-beer.png';
import NewBg from '../assets/new-beer.png';

export const Container = styled.div`
  margin-top: 59px;
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const BeersContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  height: 60vh;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.6);
  :before {
    position absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${Beer});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1
  }
`;

export const Beers = styled.div`
position: relative;
overflow:hidden;
  height: 100%;
  width: 100%;
  transition: 1s;
  :before {
    position absolute;
    content: 'All Beers';
    color: white;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: 1s;
    transform: translateY(0%); 
  }
  :hover:before{
    transform: translateY(-10%);
  }
  :after {
    position absolute;
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    color: white;
    padding: 50px 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
	align-items: flex-end;
	align-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: .9s;
    transform: translateY(100%); 
  }
  :hover:after{
    transform: translateY(0%);
  }
`;

export const RandomContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  height: 60vh;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.6);
  :before {
    position absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${RandomBg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1
  }
`;

export const Random = styled.div`
position: relative;
overflow:hidden;
  height: 100%;
  width: 100%;
  transition: 1s;
  :before {
    position absolute;
    content: 'Random Beer';
    color: white;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: 1s;
    transform: translateY(0%); 
  }
  :hover:before{
    transform: translateY(-10%);
  }
  :after {
    position absolute;
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    color: white;
    padding: 50px 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
	align-items: flex-end;
	align-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: .9s;
    transform: translateY(100%); 
  }
  :hover:after{
    transform: translateY(0%);
  }
`;

export const NewContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  height: 60vh;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.6);
  :before {
    position absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${NewBg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1
  }
`;

export const New = styled.div`
position: relative;
overflow:hidden;
  height: 100%;
  width: 100%;
  transition: 1s;
  :before {
    position absolute;
    content: 'New Beer';
    color: white;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: 1s;
    transform: translateY(0%); 
  }
  :hover:before{
    transform: translateY(-10%);
  }
  :after {
    position absolute;
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    color: white;
    padding: 50px 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
	align-items: flex-end;
	align-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: .9s;
    transform: translateY(100%); 
  }
  :hover:after{
    transform: translateY(0%);
  }
`;
import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
    <>
    <Title>Explore repositórios no Github</Title>
    <Form>
        <input placeholder="Digite o nome do repositório"></input>
        <button type="submit">Pesquisar</button>
    </Form>
        <Repositories>
            <a href="teste">
                <img 
                src="https://avatars.githubusercontent.com/u/66327211?s=400&u=f88719a4d24585502bd2feefc0773048e5c231cc&v=4"
                alt="Caroline Cunha"></img>
                <div>
                    <strong>CarolineCunha/projeto-github</strong>
                    <p>projeto github com ReactJs</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img 
                src="https://avatars.githubusercontent.com/u/66327211?s=400&u=f88719a4d24585502bd2feefc0773048e5c231cc&v=4"
                alt="Caroline Cunha"></img>
                <div>
                    <strong>CarolineCunha/projeto-github</strong>
                    <p>projeto github com ReactJs</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img 
                src="https://avatars.githubusercontent.com/u/66327211?s=400&u=f88719a4d24585502bd2feefc0773048e5c231cc&v=4"
                alt="Caroline Cunha"></img>
                <div>
                    <strong>CarolineCunha/projeto-github</strong>
                    <p>projeto github com ReactJs</p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repositories>
     </>   
     );
};

export default Dashboard;
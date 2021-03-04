import React, { useState, FormEvent } from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();
        const response = await api.get(`repos/${newRepo}`);
    }
    return (
    <>
    <Title>Explore repositórios no Github</Title>
    <Form onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite o nome do repositório"></input>
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
        </Repositories>
     </>   
     );
};

export default Dashboard;
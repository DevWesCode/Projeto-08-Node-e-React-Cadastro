import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { Await, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser, UserName } from './styles'
import Trash from '../../assets/trash.svg'


function ListUsers() {

    const [users, setUsers] = useState([])

    const navigate = useNavigate() // teste usenavigate para Voltar a pagina anterior
    const goBack = () => { // teste usenavigate para Voltar a pagina anterior
        navigate(-1) // teste usenavigate para Voltar a pagina anterior
    } // teste usenavigate para Voltar a pagina anterior


    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            console.log(data)
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)

    }

    return (

        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map(user => (

                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <UserName>{user.name}</UserName>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>

                        <TrashIcon
                            src={Trash}
                            alt='icon-trash'
                            onClick={() => {
                                const confirmDelete = window.confirm(`Tem certeza que gostaria de deletar o usúario ${user.name}?`);
                                if (confirmDelete) {
                                deleteUsers(user.id); 
                            }
                            }} />

                    </CardUsers>


                ))
                }
            </ContainerUsers >

            <Button type='button' onClick={goBack} theme="primary">Voltar</Button>
        </Container>

    )
}

export default ListUsers

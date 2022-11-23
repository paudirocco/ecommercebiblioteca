import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/NavBar';
import ItemListContainer from '../../components/ItemListContainer';


const Home = () => {
    const Menus = ['Home','Quiénes somos','Servicios','Novedades','Contacto','Productos'];
    return (
        <Layout>        
            <NavBar menus={Menus}>
            </NavBar>
            <ItemListContainer greeting='Hola, bienvenido'/>
        </Layout>
    )
}

export default Home;
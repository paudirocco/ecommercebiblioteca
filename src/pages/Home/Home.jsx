import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/NavBar';
import ItemListContainer from '../../components/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetailContainer';

// que es lo del gif
// que significa lo de las categorias, hay que filtrar?como?
// ver lo de los links y setparams
// arreglar en itemcount el tema de agregar cant mayores que el stock disponible

const Home = () => {
    const Menus = ['constitucional','laboral','jubilatorio'];

    return (
        <BrowserRouter>
        <Layout>        
            <NavBar menus={Menus}>
            </NavBar>
            <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:id' element={<ItemListContainer />} />
                <Route exact path='/category/categoryId' element={<ItemListContainer />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                <Route exact path='/category/:id/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </Layout>
        </BrowserRouter>
    )

}

export default Home;
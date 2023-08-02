import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import Counter from './Components/Counter';
import Footer from './Layout/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container-fluid">
        <Header></Header>
        <Counter></Counter>
        <Footer></Footer>
    </div>
);



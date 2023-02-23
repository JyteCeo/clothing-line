import './components/categories/categories.styles.scss'
import { categories } from './components/categories/categories';
import Directory from './components/directory-channel/directory.component';

const App = () => {

  return (
    <Directory categories={categories}/>
  );
}



export default App;

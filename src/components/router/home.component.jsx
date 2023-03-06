import { categories } from "../categories/categories";
import Directory from "../directory-channel/directory.component";
const Home = () => {

    return (
      <Directory categories={categories}/>
    );
  }

  export default Home;
import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import Item from "./items";

function App() {
  const [cat, setCat] = useState([]);
  const [selectCat, setSelectCat] = useState<any>([]); 
  const [, setValue] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); 

 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios('https://dummyjson.com/products/categories');
        setCat(result.data);
        
        fetchProducts(); 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

 
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const result = await axios(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`);
      setSelectCat((prev: any) => [...prev, ...result.data.products]);
      setHasMore(result.data.products.length === itemsPerPage);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };


  const fetchProductsByCategory = async (category: any) => {
    setLoading(true);
    setCurrentPage(1); 
    setSelectCat([]); 
    setHasMore(true); 

    try {
      const result = await axios(`https://dummyjson.com/products/category/${category}?limit=${itemsPerPage}&skip=0`);
      setSelectCat(result.data.products);
      setHasMore(result.data.products.length === itemsPerPage); 
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleCategoryClick = (slug: SetStateAction<string>) => {
    setValue(slug);
    fetchProductsByCategory(slug);
  };


  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore && !loading) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  
  useEffect(() => {
    if (currentPage > 1) {
      fetchProducts(); 
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

 
  const handleSearchChange = (e: { target: { value: string; }; }) => {
    setSearchTerm(e.target.value.toLowerCase());
  };


  const filteredProducts = selectCat.filter((product: { title: string; }) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex">
      
      <div className="w-1/4 py-10 uppercase sticky top-0 h-screen overflow-y-auto">
        {cat.map((item:any, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item.slug)}
            className='border m-2 p-4 px-4 pl-10 rounded-md font-bold bg-gradient-to-b from-violet-900 to-orange-500 bg-clip-text text-transparent text-xl'>
            {item.slug}:
          </div>
        ))}
      </div>

    
      <div className="w-3/4">
        <div className="border-2 flex justify-center mb-4">
          <input
            className="border-2 border-black w-1/3 p-2"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Item selectcat={filteredProducts} />
        {loading && <p className="text-center">Loading...</p>}
        {filteredProducts.length === 0 && !loading && <p className="text-center">No products found.</p>}
      </div>
    </div>
  );
}

export default App;

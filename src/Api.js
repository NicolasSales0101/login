import axios from "axios";
const API_BACKEND="http://localhost:3333/product";

const api = {
    createProduct: async (prodName, prodPreco, prodPrecoDesc, prodQtEstoque, cateId) => {
        try {
            let response = await axios.post(API_BACKEND, {
                prod_name: prodName,
                prod_preco: prodPreco,
                prod_preco_desc: prodPrecoDesc,
                prod_qt_estoque: prodQtEstoque,
                cate_id: cateId
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default api;
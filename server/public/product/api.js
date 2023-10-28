import { Product } from './entities.js';
import { Money } from '../financial/entities.js';
import { ProductRequest } from './schemaValidator.js';
const ProductRoute = async (fastify) => {
    fastify.post('/products', {
        schema: {
            body: ProductRequest,
            response: {
                200: ProductRequest
            }
        }
    }, async (request, reply) => {
        const product = new Product();
        const { name, image, amount, currency } = request.body;
        product.price = new Money();
        product.name = name;
        product.image = image;
        product.price.amount = amount;
        product.price.currency = currency;
        await fastify.orm.manager.save(product);
        return reply.status(200).send({ name, amount, currency, message: 'Product created successfully' });
    });
    /* fastify.delete("/products/:id", async (req, reply) => {
        const {id} = req.params as ProductRequestType
    
        const { products } = await fastify.orm.query(
            "DELETE FROM clients WHERE id = $1 RETURNING *",
            [id]
        )
      }); */
};
export default ProductRoute;
/*
fastify.delete("/clients/:id", async (req, reply) => {
    const clientId = req.params.id;

    try {
      const { rows } = await pool.query(
        "DELETE FROM clients WHERE id = $1 RETURNING *",
        [clientId]
      );
      reply.send(rows[0]);
    } catch {
      console.error("Error", error);
      reply.status(500).send("Internal Server Error");
    }
  }); */

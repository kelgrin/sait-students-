import prisma from "@/lib/prisma"
import styles from "./page.module.css";
import Image from "next/image";

// Пример данных о товарах

export default async function ProductPage({ params }) {
  const { id } = await params

  // Ищем продукт по ID
  const products = await prisma.Card.findMany();

  // Если товар не найден
  if (!products) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        { products.map((product) =>{
          if (id==product.id)
          return(
          <>
                  <Image className={styles.img} src={product.imgScr} alt={product.title} width={400} height={400} />
                  <h1 className={styles.title}>{product.title}</h1>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.price}>{product.price}</p>
          </>)
        })
      }
        <button className={styles.buyButton}>Купить</button>
      </div>
    </div>
  );
}

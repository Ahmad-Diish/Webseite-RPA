import React from "react";
import styles from "../styles/Home.module.css";

type Project = {
  id: number;
  title: string;
  description: string;
};

type Review = {
  id: number;
  title: string;
  content: string;
  continuation: string;
};

type HomePageProps = {
  projects: Project[];
  reviews: Review[];
};

const HomePage: React.FC<HomePageProps> = ({ projects, reviews }) => {
  const toggleContent = (id: number) => {
    if (typeof window !== "undefined") {
      const btn = document.getElementById(`btn-${id}`);
      const cont = document.getElementById(`cont-${id}`);
      const main = document.getElementById(`main-${id}`);

      if (cont && main && btn) {
        const isHidden = cont.style.display === "none" || cont.style.display === "";
        cont.style.display = isHidden ? "block" : "none";
        main.classList.toggle("expanded", isHidden);
        btn.innerText = isHidden ? "Less" : "More";
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Top Projects</h2>
      <div className={styles.row}>
        {projects.map((project) => (
          <div key={project.id} className={styles.col}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.heading}>Latest Reviews</h2>
      <div className={styles.row}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.col}>
            <h3>{review.title}</h3>
            <p id={`main-${review.id}`}>{review.content}</p>
            <p id={`cont-${review.id}`} style={{ display: "none" }}>
              {review.continuation}
            </p>
            <button
              id={`btn-${review.id}`}
              className="more-button"
              onClick={() => toggleContent(review.id)}
            >
              More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// getServerSideProps holen die Daten zur Serverzeit
export async function getServerSideProps() {
  // API-Aufrufe während des Server-Side Rendering
  const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projectstop`);
  const reviewsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviewstop`);

  const projects = await projectsRes.json();
  const reviews = await reviewsRes.json();

  return {
    props: {
      projects,
      reviews,
    },
  };
}

export default HomePage;

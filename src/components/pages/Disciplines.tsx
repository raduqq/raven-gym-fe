import { useState, useEffect } from "react";

export default function Disciplines() {
  const [disciplines, setDisciplines] = useState([]);

  const fetchDisciplines = async () => {
    try {
      const token = sessionStorage.getItem("token")?.slice(1, -1);
      const authHeader = `Bearer ${token}`;
      const response = await fetch("http://localhost:8080/disciplines", {
        method: "GET",
        headers: {
          Authorization: authHeader,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Process the received disciplines data
        setDisciplines(data);
      } else {
        // Handle error response
        console.error("Failed to fetch disciplines");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error occurred while fetching disciplines", error);
    }
  };

  useEffect(() => {
    fetchDisciplines();
  }, []);

  return (
    <div>
      <h1>Disciplines</h1>
      <p>
        Explore the diverse range of martial arts disciplines offered at Raven
        Martial Arts Gym. From striking arts like kickboxing and Muay Thai to
        grappling arts like Brazilian Jiu-Jitsu and wrestling, we offer a
        comprehensive training experience for practitioners of all levels.
        Discover the benefits and intricacies of each discipline and find the
        perfect fit for your martial arts journey.
      </p>
      <p>
        Train with us and master the art of self-defense, discipline, and
        personal growth.
      </p>

      <h2>Available Disciplines:</h2>
      <ul>
        {disciplines.map((discipline) => (
          <li key={discipline.id}>{discipline.name}</li>
        ))}
      </ul>
    </div>
  );
}

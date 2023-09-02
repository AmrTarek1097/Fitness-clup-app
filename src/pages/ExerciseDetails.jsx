import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Details } from "../components/Details";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetails() {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [similarExercises, setSimilarExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const similarExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
        exerciseOptions
      );
      setSimilarExercises(similarExercisesData)
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <SimilarExercises similarExercises={similarExercises}/>
    </Box>
  );
}

export default ExerciseDetails;

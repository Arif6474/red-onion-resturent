import { useEffect, useState } from "react"

const useItems = () => {
    const [breakfast, setBreakfast] =useState([]);
    const [lunch, setLunch] =useState([]);
    const [dinner, setDinner] =useState([]);


    useEffect(() =>{
        fetch('breakfast.json')
        .then(res => res.json())
        .then (data => setBreakfast(data))
    }, [])
    useEffect(() =>{
        fetch('lunch.json')
        .then(res => res.json())
        .then (data => setLunch(data))
    },[])

    useEffect(() =>{
        fetch('dinner.json')
        .then(res => res.json())
        .then (data => setDinner(data))
    }, [])

    return [breakfast, setBreakfast , lunch, setLunch, dinner, setDinner];
}

export default useItems;
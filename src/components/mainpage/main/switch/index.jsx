import React, {useContext, useEffect} from 'react'
import "./SwitchClothes.scss"
import {AppContext} from '../../../app/App'
import axios from 'axios';
import {BASE_URL} from '../../../../assets/constant';

export const SwitchClothes = ({ onPageChange }) => {
    const {
        cardData,
        setCurrentCardData,
        setCurrentPage,
        currentPage
    } = useContext(AppContext);

    const [activeSwitch, setActiveSwitch] = React.useState(0)
    const [categories, setCategories] = React.useState([""])
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${BASE_URL}/group/getAll`)
            // const res = {data: ProductJson}
            const temp = ["All"]
            if (res.data) {
                for (let element of res.data) {
                    temp.push(element.groupName)
                }
                setCategories([...temp])
            }
        }

        fetchData()
    }, [])

    const filterClothes = (index) => {
        if(index === 0) {
            setCurrentCardData(cardData)
            return;
        }
        const temp = []
        for(let element of cardData) {
            console.log('category: ', categories[index]);
            console.log(element.group.groupName.toLocaleLowerCase())
            if (element.group.groupName.toLocaleLowerCase() === categories[index].toLocaleLowerCase()) {
                temp.push(element)
            }
        }
        setCurrentCardData(temp)
    }

    const handleCategoryChange = (index) => {
        onPageChange(1);
        setTimeout(() => {
            setActiveSwitch(index)
            filterClothes(index)
        }, 100)
    }

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <ul className="switch-categories">
                        {categories.map((text, index) => (
                            <li key={index} onClick={() => handleCategoryChange(index)} className={activeSwitch === index ? "activeSwitch" : ""}>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

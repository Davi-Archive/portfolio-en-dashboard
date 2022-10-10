import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    Avatar,
    CardContent,
    Typography,
    IconButton,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import "./skills.scss";
import { requestData } from '../../container/dataService';


const dataBlog = [
    {
        _id: 12777523,
        name: "typescript",
        bgColor: "fff000",
        icon: "https://cdn.donmai.us/original/7e/a4/__black_alice_mon_musu_quest_drawn_by_raichi_ddq0246__7ea43624939be715fb584ad77cc006bf.png",
    },
    {
        _id: 12777523,
        name: "typescript",
        bgColor: "fff000",
        icon: "https://cdn.donmai.us/original/7e/a4/__black_alice_mon_musu_quest_drawn_by_raichi_ddq0246__7ea43624939be715fb584ad77cc006bf.png",
    },
    {
        _id: 12777523,
        name: "typescript",
        bgColor: "fff000",
        icon: "https://cdn.donmai.us/original/7e/a4/__black_alice_mon_musu_quest_drawn_by_raichi_ddq0246__7ea43624939be715fb584ad77cc006bf.png",
    },
    {
        _id: 12777523,
        name: "typescript",
        bgColor: "fff000",
        icon: "https://cdn.donmai.us/original/7e/a4/__black_alice_mon_musu_quest_drawn_by_raichi_ddq0246__7ea43624939be715fb584ad77cc006bf.png",
    },
    {
        _id: 1277414127523,
        name: "Loading",
        bgColor: "fff000",
        icon: "https://cdn.donmai.us/original/7e/a4/__black_alice_mon_musu_quest_drawn_by_raichi_ddq0246__7ea43624939be715fb584ad77cc006bf.png",
    },
]

export const About = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        requestData('portfolio/en/skills')
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const handleEdit = (id) => {
        // pass id and path to <Edit /> component as in APP.jsx
        navigate(`../edit/skills/${id}`)
    }
    const handleDelete = (id) => {
        deleteDataToken(PATH, token, id)
            .then(data => console.log(data))
            .then(() => navigate("/"))
    }
    return (
        <div className='wrapper'>
            {""}
            {data.map((skill, index) => (
                <Box key={index} marginTop={10} marginRight={3}>
                    <Card sx={{
                        width: "100%",
                        marginLeft: '220px',
                        marginRight: "auto",
                        mt: 2,
                        padding: 2,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>
                        <Box display="flex">
                            <IconButton
                                sx={{ marginLeft: "auto" }}
                                onClick={() => handleEdit(skill._id)}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={() => handleDelete(skill._id)}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {skill.userName ? skill.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={skill.title}
                            subheader={new Date(skill.updatedAt).toLocaleDateString('pt-BR')}
                        />
                        <CardContent>
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="app__skills-item app__flex"
                                key={skill._id}
                            >
                                <div
                                    className="app__flex"
                                    style={{ backgroundColor: skill.bgColor }}
                                >
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default About
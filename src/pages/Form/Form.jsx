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
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { requestDataToken, fallback } from '../../container/dataService';
import "./Form.scss";

export const Form = () => {
    const [data, setData] = useState(fallback)
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.user.token)
    useEffect(() => {
        requestDataToken('portfolio/contact', token)
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    console.log(data)
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`)
    }
    const handleDelete = (id) => {
        console.log(id)
        /* deleteRequest(id).then(data => console.log(data))
            .then(() => navigate("/myBlogs"))
            .then(() => navigate("/blogs")) */
    }
    const deleteRequest = async () => {
        /* const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/blog/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data; */
    }
    return (
        <div className='wrapper'>
            {""}
            {data.map((form, index) => (
                <>
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
                                onClick={handleEdit}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={()=>{handleDelete(form._id)}}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {form.userName ? form.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={form.email}
                            subheader={new Date(form.updatedAt).toLocaleString('pt-BR')}
                        />
                        <CardContent>
                            <div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: "tween" }}
                                className="app__profile-item"
                            >
                                <h2 className="bold-text" style={{ marginTop: 20 }}>
                                    {form.name}
                                </h2>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {form.message}
                                </p>
                                <hr />
                                <br />
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    From:{form.where}
                                </p>

                            </div>
                        </CardContent>
                    </Card>
                </Box >
                </>
            ))
            }
        </div >
    );
}

export default Form
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TourModel from '../models/TourModel';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

function TourDelete(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        TourModel.find(id)
            .then((res) => {
                setTour(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const handleDelete = () => {
        
        Swal.fire({
            title: 'Bạn có muốn xóa Tour?',
            text: 'Bạn sẽ xóa hoàn toàn tour khỏi danh sách!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
        }).then(result => {
            if (result.isConfirmed) {
                TourModel.delete(id)
                    .then((res) => {
                        Swal.fire('Xóa thành công!', 'Tour đã được xóa khỏi danh sách.', 'success');
                        navigate('/tours');
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    };

    return (
        <div className="container">
            <h1>Xóa Tour</h1>
            <div>
                <strong>Tên:</strong> {tour.name}<br />
                <strong>Giá:</strong> {tour.price}<br />
                <strong>Mô tả:</strong> {tour.description}<br />
            </div>
            <button className="delete-btn" onClick={handleDelete}>Xóa</button>
            <Link to="/tours" className="back-btn">Danh Sách</Link>
        </div>
    );
}

export default TourDelete;
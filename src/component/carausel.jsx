import React from 'react';

const Carausel = () => {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3500">
                        <h2>Temukan Jalanmu untuk Mencari Produk murah dan bagus</h2>

                    </div>
                    <div class="carousel-item" data-bs-interval="3500" >
                        <h2>Mari Temukan Jalanmu untuk Mencari Produk murah dan bagus</h2>

                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <h2>Let's Temukan Jalanmu untuk Mencari Produk murah dan bagus</h2>

                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Carausel;

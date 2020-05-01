import React from 'react';
import GoogleMapReact from 'google-map-react';

import './contact.css';

export const Contact = () => {
    return(
        <div className="contactPageStyle">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33
                  }}
                defaultZoom={11}
            />
            
        </div>
    );
}
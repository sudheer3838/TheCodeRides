import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function TestimonialLogoModal(client) {
	console.log(`client`, client);
	return (
		<div className="modal fade" id="TestimonialLogoModal" tabIndex="-1" aria-labelledby="TestimonialLogoModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Title h5</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						{/* <h1>{client}</h1> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TestimonialLogoModal
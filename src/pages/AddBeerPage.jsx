import { useState } from "react";
import { addBeer } from "../utils/apiCalls.js";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [message,setMessage] = useState("")
	// State variables to store the values of the form inputs. You can leave these as they are.
	const [name, setName] = useState("Christmas Ale");
	const [tagline, setTagline] = useState("Perfect for christmas");
	const [description, setDescription] = useState("A very smooth beer to enjoy in company.");
	const [imageUrl, setImageUrl] = useState("https://www.twofunnygirls.com/wp-content/uploads/2020/05/Custom-Printed-Cane-Koozie-Christmas-Beer-Can-Koozie-Have-Yourself-A-Merry-Little-Cocktail-1024x683.jpg");
	const [firstBrewed, setFirstBrewed] = useState("09/2024");
	const [brewersTips, setBrewersTips] = useState("Give it time, brew slowly.");
	const [attenuationLevel, setAttenuationLevel] = useState(99);
	const [contributedBy, setContributedBy] = useState("Papa Noel");

	// Handler functions for the form inputs. You can leave these as they are.
	const handleName = (e) => setName(e.target.value);
	const handleTagline = (e) => setTagline(e.target.value);
	const handleDescription = (e) => setDescription(e.target.value);
	const handleImageUrl = (e) => setImageUrl(e.target.value);
	const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
	const handleBrewersTips = (e) => setBrewersTips(e.target.value);
	const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
	const handleContributedBy = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newBeer = {
			name: name,
			tagline: tagline,
			description: description,
			image_url: imageUrl,
			first_brewed: firstBrewed,
			brewers_tips: brewersTips,
			attenuation_level: attenuationLevel,
			contributed_by: contributedBy,
		};

		addBeer(newBeer,setMessage,navigate);
	};

	// TASK:
	// 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
	// 2. Use axios to make a POST request to the Beers API.
	// 3. Once the beer is created, navigate the user to the page showing the list of all beers.

	// Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
	return (
		<>
			<div className="d-inline-flex flex-column w-100 p-4">
      {!message ? (
        
        <form onSubmit={handleSubmit}>
					<label>Name</label>
					<input
						className="form-control mb-4"
						type="text"
						name="name"
						placeholder="Beer Name"
						value={name}
						onChange={handleName}
					/>
					<label>Tagline</label>
					<input
						className="form-control mb-4"
						type="text"
						name="tagline"
						placeholder="Beer Tagline"
						value={tagline}
						onChange={handleTagline}
					/>

					<label className="form-label">Description</label>
					<textarea
						className="form-control mb-4"
						type="text"
						name="description"
						placeholder="Description"
						rows="3"
						value={description}
						onChange={handleDescription}
					></textarea>

					<label>Image</label>
					<input
						className="form-control mb-4"
						type="text"
						name="imageUrl"
						placeholder="Image URL"
						value={imageUrl}
						onChange={handleImageUrl}
					/>

					<label>First Brewed</label>
					<input
						className="form-control mb-4"
						type="text"
						name="firstBrewed"
						placeholder="Date - MM/YYYY"
						value={firstBrewed}
						onChange={handleFirstBrewed}
					/>

					<label>Brewer Tips</label>
					<input
						className="form-control mb-4"
						type="text"
						name="brewersTips"
						placeholder="..."
						value={brewersTips}
						onChange={handleBrewersTips}
					/>

					<label>Attenuation Level</label>
					<div className="input-group mb-2">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">
								%
							</span>
						</div>
						<input
							className="form-control mb-4"
							type="number"
							name="attenuationLevel"
							value={attenuationLevel}
							onChange={handleAttenuationLevel}
							min={0}
							max={100}
						/>
					</div>

					<label>Contributed By</label>
					<input
						className="form-control mb-4"
						type="text"
						name="contributedBy"
						placeholder="Contributed by"
						value={contributedBy}
						onChange={handleContributedBy}
					/>
					<button className="btn btn-primary btn-round">Add Beer</button>
				</form> ) : <div>{message}</div>}
			</div>
		</>
	);
}

export default AddBeerPage;

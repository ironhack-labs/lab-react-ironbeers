import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { beersApi } from '../App';
import Header from '../Header/Header';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewerTips, setBrewerTips] = useState('');
  const [attenuation, setAttenuation] = useState('');
  const [contributedBy, setContributedBy] = useState('');
  const [newBeer, setNewBeer] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewBeer({
      name,
      tagline,
      description,
      firstBrewed,
      brewerTips,
      attenuation,
      contributedBy,
    });
    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setFirstBrewed('');
    setBrewerTips('');
    setAttenuation('');
    setContributedBy('');
  };

  useEffect(() => {
    const postBeer = async () => {
      const { data } = await beersApi.post('new', newBeer);
    };

    postBeer();
  }, [newBeer]);

  return (
    <>
      <Header />
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tagline</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">First brewed</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="First brewed"
              value={firstBrewed}
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Brewer tips</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Brewer tips"
              value={brewerTips}
              onChange={(e) => setBrewerTips(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Attenuation level</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Attenuation level"
              value={attenuation}
              onChange={(e) => setAttenuation(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Contributed by</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Contributed by"
              value={contributedBy}
              onChange={(e) => setContributedBy(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button class="button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewBeer;

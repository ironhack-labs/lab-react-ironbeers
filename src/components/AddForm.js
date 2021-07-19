import React, { useState, useEffect } from 'react';
import Header from './Header';

function AddForm() {
  return (
    <div>
      <Header />
     
        <form onSubmit={onAddBeer} noValidate autoComplete="off">
                <label></label>
                <input></input>


                <Button type="submit" variant="contained" color="primary">
                    Add new Beer
                </Button>
            </form>
        )



     
    </div>
  );
}

export default AddForm;

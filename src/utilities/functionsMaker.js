import React from 'react';

export const setRating = (item) => {
    item = item * 10;
    return item;
}

export const changeDate = (item) => {
    const date = new Date(item);
    var moment = require('moment');
    const formattedDate = moment(date).format("LL");
    return formattedDate;
}

export const movieTagsArray = (arr) => {
    const names = arr.map(item => item);
    return names.map((tag, i) => {
        return <li key={i}>{tag}</li>
    });
}

export const movieTags = (arr) => {
    return arr.map((tag, i) => {
      return <li key={i}>{tag}</li>
    });
  }
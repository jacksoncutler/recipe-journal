import { useState } from 'react';
import { Link } from 'react-router';
import { customAlphabet } from 'nanoid';

import { RecipeList } from './RecipeList';

const nanoid = customAlphabet('1234567890', 7);

export function LandingPage() {
  const [listKey, setListKey] = useState(nanoid());
  function forceUpdate() {
    setListKey(nanoid());
  }

  return (
    <section id='content' className='container'>
      <div id='hero' className='hero'>
        Recipe Journal
      </div>
      <Link to='/recipe/new/edit'><button>Create New</button></Link>
      <RecipeList key={listKey} forceUpdate={forceUpdate} />
    </section>
  );
}

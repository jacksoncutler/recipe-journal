import { RecipeList } from './RecipeList';

export function LandingPage() {
  return (
    <section id='content' className='container'>
      <div id='hero' className='hero'>
        Recipe Journal
      </div>
      <RecipeList />
    </section>
  );
}

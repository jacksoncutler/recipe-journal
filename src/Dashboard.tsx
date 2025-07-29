import RecipeList from './RecipeList';

export default function Dashboard() {
  return (
    <section id='content' className='container'>
      <div id='hero' className='hero'>
        Recipe Journal
      </div>
      <RecipeList />
    </section>
  );
}

import { Outlet, useParams } from 'react-router';

export function Recipe() {
  let params = useParams();
  
  return (
    <section>
      <Outlet context={{id: params.recipeId}} />
    </section>
  );
}

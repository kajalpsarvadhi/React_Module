import { createContext,useState,useReducer,useRef,useEffect,useContext, memo, useCallback, useMemo } from "react"
import type {Recipe,Cuisine } from '../utils/types'
const RECIPES : Record<Cuisine, Recipe[]> = {
    indian:[
        {id:'1',name:'Butter Chicken',ingredients:['chicken','butter'],time:'45min'},
        {id:'2', name:'Paneer Tikka', ingredients:['paneer','yogurt','spices'], time:'30min'},
        {id:'3', name:'Dal Makhani', ingredients:['black lentils','butter','cream'], time:'60min'},
        {id:'4', name:'Aloo Gobi', ingredients:['potatoes','cauliflower','spices'], time:'25min'}],
    italian: [
        {id:'5', name:'Pasta', ingredients:['pasta','sauce'], time:'20min'},
        {id:'6', name:'Pasta Carbonara', ingredients:['pasta','eggs','pancetta'], time:'20min'},
        {id:'7', name:'Margherita Pizza', ingredients:['pizza dough','mozzarella','basil'], time:'25min'},
        {id:'8', name:'Lasagna', ingredients:['pasta sheets','beef','cheese'], time:'60min'}],
    chinese:[
        {id:'9',name:'Fried Rice',ingredients:['rice','eggs'], time: '30min'},
        {id:'10', name:'Hakka Noodles', ingredients:['noodles','cabbage','carrots'], time:'15min'},
        {id:'11', name:'Chilli Chicken', ingredients:['chicken','chillies','soy sauce'], time:'30min'},
        {id:'12', name:'Gobi Manchurian', ingredients:['cauliflower','cornflour','sauce'], time:'35min'}]
}

type State = { cuisine: Cuisine };  
type Action = { type: 'SET_CUISINE'; payload: Cuisine };


interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const recipeContext = createContext<ContextValue| null>(null);

const recipeReducer = (state:State, action:Action):State =>{
    console.log('Current state:', state);        
    console.log('Action:', action);
    switch(action.type){
        case 'SET_CUISINE':
            return {...state,cuisine:action.payload};
        default: 
            return state;
    }
}


const Button = memo(({cuisine}:{ cuisine: Cuisine }) => {    
    console.log('useContext(dispatch)');
                 
    const { dispatch } = useContext(recipeContext)!;
    
    
    console.log('useCallback(onClick)');
    const onClick = useCallback(() => {                
      dispatch({type: 'SET_CUISINE', payload: cuisine});
    }, [dispatch,cuisine]);
    console.log('Button rendered:', cuisine);
    return <button onClick={onClick}>{cuisine}</button>;
  });


const RecipeFinder = () => {
    console.log('RecipeFinder RENDERED');
  console.log('useState(search)');
  const [search, setSearch] = useState('');  
//   console.log('useRef(input)');         
  const inputRef = useRef<HTMLInputElement>(null);   
//   console.log('useReducer(state)');                   
  const [state, dispatch] = useReducer(recipeReducer, {cuisine: 'indian'}); 
  
  const value = useMemo(() => ({state, dispatch}), [state]); 
   
//   console.log('useEffect(title/focus)');
  
  useEffect(() => {                                   
    console.log("Current: ",inputRef.current)
    inputRef.current?.focus();
    document.title = `Recipes - ${state.cuisine}`;
  }, [state.cuisine]);


  const filtered = useMemo(() =>  
    RECIPES[state.cuisine].filter(r => 
      r.name.toLowerCase().includes(search.toLowerCase())
    ), [RECIPES[state.cuisine], search]
  );

  
  return (
    <recipeContext.Provider value={value}>
      {/* <Link to="/">← Home</Link> */}
      <h1>Recipe Finder</h1>
      
      <div>
        <Button cuisine="indian" />
        <Button cuisine="italian" />
        <Button cuisine="chinese" />
      </div>
      
      <input 
        ref={inputRef}
        value={search} 
        onChange={e => setSearch(e.target.value)}
        placeholder="Search recipes..."
      />
      
      <ul>
        {filtered.map(recipe => (
          <li key={recipe.id}>{recipe.name} - {recipe.time}</li>
        ))}
      </ul>
    </recipeContext.Provider>
  );
};



export default RecipeFinder;   
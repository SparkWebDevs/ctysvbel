<style>
    
    
    .toolbar {
        width: 20%;
        border-right: 1px solid #ffdd0c;
        font-family: sans-serif;
        padding: 0 10px;
    } 
    
    .container {
        flex-grow: 1;
        width: 100%;
        order: -1;
    }
    
    .yellow-btn {
        background: #ffdd0c;
        border: none;
        height: 35px;
        font-weight: bold;
        font-size: 15px;
        font-family: sans-serif;
        cursor: pointer;
        color: #262626;
        border-radius: 2px;
        margin: 5px 0;
        min-width: 70px;
    }
    
    .yellow-btn:hover {
	    background-color: #262626;
        color: white;
    }
    
    .yellow-btn:focus {
        border: 1px;
    } 
    
    input[type="number"] {
        display: block;
        -moz-appearance: textfield;
        border: 2px solid #bebebe;
        border-radius: 5px;
        height: 30px;
        margin: 5px;
        margin-left: 15px;  
        font-size: 15px;
        padding: 0 5px;
        
    }
    
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    select {
        width: 60px;
    }
    

</style>
<div class="toolbar">
    <h3>Encuentra tu boleto de la suerte</h3>
    <form action="">
        <input type="radio" name="section" value="1"> Option 1<br>
        <input type="radio" name="section" value="2"> Option 2<br>
        <input type="radio" name="section" value="3"> Option 3 <br>
        <input type="radio" name="section" value="4"> Option 4<br>
        <input type="radio" name="section" value="5"> Option 5<br>
        <input type="radio" name="section" value="6"> Option 6 <br>
        <button class="yellow-btn">Encuentra tu boleto</button>
    </form>
    <h3>Aumentar resultados de busqueda</h3>
    <select name="result-range" id="">
        <option value="40">40</option>
        <option value="80">80</option>
        <option value="120">120</option>
        <option value="160">160</option>
        <option value="200">200</option>
    </select>
    <input type="button" class="yellow-btn result-range-btn" value="Ir">
</div>
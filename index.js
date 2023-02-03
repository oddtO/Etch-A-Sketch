(function()
{
    const MAX_GRID_RESOLUTION = 100;

    let grid = createFlexibleGrid(100);

    let resetButton = document.querySelector('.resetter');
    let sketchPad = document.querySelector('.main');

    resetButton.addEventListener('click', resetGrid);
    sketchPad.addEventListener('pointerover', drawCellColor);

    sketchPad.append(grid);

    return;
    



    function createFlexibleGrid(size = 16)
    {
        

        // let gridMain = document.querySelector('.main');

        let gridMain = new DocumentFragment();


        for(let i = 0; i < size; ++i)
        {
            addRow();
            fillRow();
        }


        return gridMain;




        function addRow()
        {
            gridMain.append(document.createElement('div'));
        }

        function fillRow()
        {
            for(let i = 0; i < size; ++i)
                gridMain.lastElementChild.append(document.createElement('div'));
        }


    }


    function drawCellColor(event)
    {
        if(event.target.children.length > 0)
            return;

        event.target.style.backgroundColor = 'black';
        
    }


    function resetGrid(event)
    {
        event.preventDefault();
        let desiredGridSize = askValidSize();

        let newGrid = createFlexibleGrid(desiredGridSize);

        sketchPad.replaceChildren(newGrid);

        return;



        function askValidSize()
        {
            let desiredGridSize;
            while (true) 
            {
                desiredGridSize = +prompt(`What grid resolution would you prefer? (Maximum ${MAX_GRID_RESOLUTION})`);
    
                if(Number.isInteger(desiredGridSize) && desiredGridSize > 0 && desiredGridSize <= MAX_GRID_RESOLUTION)
                   break;
    
                alert(`Please, enter a valid number between 0-${MAX_GRID_RESOLUTION} inclusive`);
            }

            return desiredGridSize;
        }

    }




})();
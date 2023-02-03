(function()
{
    const MAX_GRID_RESOLUTION = 100;

    let grid = createFlexibleGrid(askValidSize());

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
        let currentCell = event.target;
        if(currentCell.children.length > 0)
            return;

        

        let r, g, b;
        if(currentCell.hasOwnProperty('r'))//whether background color has been already randomly generated
        {

            makeFullBlackIn10Calls(currentCell);


        }
        else
        {
            [r, g, b] = getRandomRGBColor();
            markAsStoringRGB(currentCell);
            setBackgroundColorInRGB(currentCell, r, g, b);

        }

        return;





        function getRandomRGBColor()
        {
            const RGB_MIN = 0;
            const RGB_MAX = 255;

            return [getRandomNumberInRange(RGB_MIN, RGB_MAX), getRandomNumberInRange(RGB_MIN, RGB_MAX), getRandomNumberInRange(RGB_MIN, RGB_MAX)]; 
        }



        function makeFullBlackIn10Calls(currentCell)
        {
            const CALLS_TO_FULL_BLACK = 10;
            const TEN_REDUCTIONS_TO_BLACK = 0.10;

            if(currentCell.fullyBlackened)
            {
                return;
            }
            
            if(!currentCell.hasOwnProperty('timesBlackened'))
            {
                currentCell.timesBlackened = 0;
                currentCell.r.reduceBy = getPercentage(currentCell.r.value, TEN_REDUCTIONS_TO_BLACK);
                currentCell.g.reduceBy = getPercentage(currentCell.g.value, TEN_REDUCTIONS_TO_BLACK);
                currentCell.b.reduceBy = getPercentage(currentCell.b.value, TEN_REDUCTIONS_TO_BLACK);
            }

            setBackgroundColorInRGB(currentCell, 
                currentCell.r.value - currentCell.r.reduceBy,
                currentCell.g.value - currentCell.g.reduceBy,
                currentCell.b.value - currentCell.b.reduceBy);

            

            ++currentCell.timesBlackened;

            
            if(currentCell.timesBlackened >= CALLS_TO_FULL_BLACK)
            {
                setBackgroundColorInRGB(currentCell, 0, 0, 0);
                currentCell.fullyBlackened = true;
            }
        }



        function getPercentage(num, percent)
        {
            return num * percent;
        }


        function setBackgroundColorInRGB(currentCell, r, g, b)
        {
            currentCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


            currentCell.r.value = r;
            currentCell.g.value = g;
            currentCell.b.value = b;
        }

        function markAsStoringRGB(currentCell)
        {
            currentCell.r = {};
            currentCell.g = {};
            currentCell.b = {};


        }

      
        
    }


    function resetGrid(event)
    {
        event.preventDefault();
        let desiredGridSize = askValidSize();

        let newGrid = createFlexibleGrid(desiredGridSize);

        sketchPad.replaceChildren(newGrid);

        return;





    }



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

    function getRandomNumberInRange(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    }




})();
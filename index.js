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
        let currentCell = event.target;
        if(currentCell.children.length > 0)
            return;

        


        if(/* isColorSetInRGB(currentCell.style.backgroundColor) */true)
        {

            let [r, g, b] = getRandomRGBColor();
            currentCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        }
        else
        {

        }

        


        function getRandomRGBColor()
        {
            const RGB_MIN = 0;
            const RGB_MAX = 255;

            return [getRandomNumberInRange(RGB_MIN, RGB_MAX), getRandomNumberInRange(RGB_MIN, RGB_MAX), getRandomNumberInRange(RGB_MIN, RGB_MAX)]; 
        }

        function isColorSetInRGB(colorString)
        {
            const COLOR_SET_IN_RGB_TESTER = /^rgb/;
            return COLOR_SET_IN_RGB_TESTER.test(colorString);
        }

        function extractRGBColors(rgbString)
        {
            const RGB_VALUES_EXTRACTOR = /[\D]/g;
            rgbString.replace(RGB_VALUES_EXTRACTOR, '').split(' ');

        }
        
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


    function getRandomNumberInRange(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    }




})();
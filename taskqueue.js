const prompt = require('prompt-sync')();

main = ()=>{

    var old = prompt('Enter old task queue as a string without whitespace: ').toUpperCase().split('');
    var currentIndex = parseInt(prompt('Enter current index of Old task queue: '));
    if(Number.isNaN(currentIndex)){
        console.log('Please enter a valid index');
        return null;
    }
    var curr = prompt('Enter old task queue as a string without whitespace: ').toUpperCase().split('');

    const findNewCurrentIndex = (frequency)=>{
        var count =0;
        for(let i=0;i<curr.length;i++){
            if(curr[i] === old[currentIndex]){
                count++;
                if(count === frequency)
                    return i;
            }
        }
        return count;
    }
    const findFrequency = ()=>{
        var count = 1;
        for(let i=0; i<currentIndex; i++){
            if(old[i] === old[currentIndex])
                count++;
        }
        return count;
    }
    var visited = new Array(old.length).fill(false);
    for(let j=0;j<visited.length;j++){
        if(!visited[j]){
            visited[j] = true;
            if(curr.indexOf(old[j]) === -1){
                old[j] = -1;
                for(let i = j+1; i < old.length; i++){
                    if(old[i] === old[j]){
                        old[i] = -1;
                        visited[j] = true;
                    }
                }
            }else{
                for(let i = j+1; i < old.length; i++){
                    if(old[i] === old[j]){
                        visited[j] = true;
                    }
                }
            }
        }
    };
    var currentIndexCopy = currentIndex;
    while(old[currentIndex] === -1 && currentIndex < old.length){
        currentIndex++;
    }
    if(currentIndex === old.length){
        while(old[currentIndexCopy] === -1 && currentIndexCopy>0){
            currentIndexCopy--;
        }
        currentIndex = currentIndexCopy;
    }
    const frequency = findFrequency();
    console.log('Index of New Task Queue: '+findNewCurrentIndex(frequency));
}
main();

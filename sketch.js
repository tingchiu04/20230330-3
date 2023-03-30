function setup() {
  createCanvas(windowWidth, windowHeight);  //設定畫布和視窗大小相同

}

function myyyy() { //將圖畫整理為一個函數
  //要連線的座標點
  let points = [[3,3],[5,-1],[6,-2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; 


  // 將座標點擴大 20 倍
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }

  //基本設定
  translate(width/2, height/2);
  scale(1, -1);
  strokeWeight(20); //線條粗細

  // 定義漸層顏色
  let c1 = color("#2ec4b6");
  let c2 = color("#ee6c4d");
 
  //從第一點跟第二點連成一線，接著，從第二點跟第三點連成一線，以此類推到最後一個
  for (let t = 0; t < points.length-1; t++) {
    let colorLine = lerpColor(c1, c2, t / points.length);
    stroke(colorLine);
    line(points[t][0], points[t][1], points[t+1][0], points[t+1][1]);
  }

  //最後一點與第一點連成一線
  let colorLine = lerpColor(c1, c2, 1);
  stroke(colorLine);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
}


function draw() {
  background(255); //背景色白色
  myyyy() //呼叫函數繪圖
}
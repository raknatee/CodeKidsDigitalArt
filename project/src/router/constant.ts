class Unit{
    unitId:number
    starPoint:number
    title:string
    end:number
    constructor(unitId:number,starPoint:number,title:string,end:number){
        this.unitId = unitId
        this.starPoint = starPoint
        this.title = title
        this.end = end
    }

}

const units:Unit[] = []

units.push(new Unit(1,0,'Basic Procreate & Visual Elements',14))
units.push(new Unit(2,0,'Color',11))
units.push(new Unit(3,0,'Light & Shade',9))
units.push(new Unit(4,0,'Geometric shapes 2D-3D',6))
units.push(new Unit(5,1,'Apple',11))
units.push(new Unit(6,1,'Pudding Time',11))
units.push(new Unit(7,1,'Donut',12))
units.push(new Unit(8,2,'Strawberry',12))
units.push(new Unit(9,2,'Egg',12))
units.push(new Unit(10,2,'Cherry',11))
units.push(new Unit(11,2,'Cupcake',12))
units.push(new Unit(12,0,'Creative From Circle',7))


export {units,Unit}
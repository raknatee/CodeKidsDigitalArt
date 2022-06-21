class Unit{
    unitId:number
    starPoint:number
    title:string
    constructor(unitId:number,starPoint:number,title:string){
        this.unitId = unitId
        this.starPoint = starPoint
        this.title = title
    }

}

const units:Unit[] = []

units.push(new Unit(1,0,'Basic Procreate & Visual Elements'))
units.push(new Unit(2,1,'Color'))
units.push(new Unit(3,2,'Light & Shade'))
units.push(new Unit(4,3,'Geometric shapes 2D-3D'))
units.push(new Unit(5,1,'Apple'))


export {units,Unit}
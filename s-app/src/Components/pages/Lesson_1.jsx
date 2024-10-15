import React from "react";
import "./Lesson.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import DemandCurve from './images/DemandCurve.png'
import SupplyCurve from './images/SupplyCurve.png'
import SupDemCurve from './images/SupDemCurve.png'
import InDemFact from './images/InDemFact.png'
import DecDemFact from './images/DecDemFact.png'
import InSupFact from './images/InSupFact.png'
import DecSupFact from './images/DecSupFact.png'
import ExampleDemand from './images/ExampleDemand.png'
import ExampleSupply from './images/ExampleSupply.png'
import ExampleSupDem from './images/ExampleSupDem.png'
import DemGal from './DemandDraw';
import SupGal from "./SupplyDraw";
import PopUp from "./PopUp";




export const Lesson_1 = () => {

    


    const [progress, setProgress] = useState(0);
    const [checkedSections, setCheckedSections] = useState({
        introduction: false,
        definitions: false,
        demamd: false,
        supply: false,
        marketeq: false,
        shifts: false
    });

    const totalSections = Object.keys(checkedSections).length;

    useEffect(() => {
        const completedSections = Object.values(checkedSections).filter(Boolean).length;
        setProgress((completedSections / 6) * 100);
    }, [checkedSections]);

    const handleCheckSection = (section) => {
        setCheckedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };


    return(
        <>
        <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>

        <div class="content-container">

            
            

            <div class="l-header">
                Lesson 1: Supply and Demand
            </div>

            <div class="subhead">
                Introduction
            </div>

            <div class="body">
            Microeconomics studies the behavior of humans regarding unlimited ends and limited means, which have alternative uses.
            <br/>
            Ends: the human needs/wants (creates demand for goods)
            <br/>
            Means: resources (creates the supply of goods)
            <br/>
            This definition can be rewritten in terms of supply and demand:
            Microeconomics studies the behavior of humans regarding unlimited demand and limited supply.
            </div>

            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="introduction" 
                    checked={checkedSections.introduction}
                    onChange={() => handleCheckSection('introduction')}
                />
                <label htmlFor="introduction" class="prog-label">Mark as completed</label>
            </div>

            <div class="subhead">
            Other definitions needed to understand microeconomics
            </div>

            
            <div class="body">
                <ul class="indented-list">
                <li>Demand: The amount of demand by the market</li>
                <li>Supply: The amount supplied to the market </li>
                <li>Equilibrium: Market demands are equal to what is supplied</li>
                <li>Shortage: Market demands are more than what is supplied</li>
                <li>Surplus: Market demands are less than what is supplied</li>
                </ul> 
            </div>
            
            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="definitions" 
                    checked={checkedSections.definitions}
                    onChange={() => handleCheckSection('definitions')}
                />
                <label htmlFor="definitions" class="prog-label">Mark as completed</label>
            </div>

            <div class="subhead">
                Demand
            </div>

            <div class="body">
            Economists use the term demand to refer to the amount of goods or services customers are willing and able to purchase at each price. The total number of units that a consumer would purchase at a certain price is called the quantity demanded.
            </div>

            <div>
            <figure>
            <img src={DemandCurve} 
                alt="Demand Curve" 
                width={300} 
                height={300}
                />
                <figcaption class="fig-cap">The Demand Curve represents consumers' willingness to pay.</figcaption>
            </figure>
            </div>

            <div class="third-head">
            Let's look at an example
            </div>

            <div class="body">
                The <PopUp word="demand schedule" definition="Table that shows the quantity demanded at each price" /> is shown for coffee. From this, we can draw the Demand Curve.
            </div>
            
            <div class="content-wrapper">
            <div>
                <p class="body-c"> <PopUp word="How to draw?" definition="Click on the 'Draw Graph' button to see how the demand curve is drawn."/></p>
                <table>
                <thead>
                    <tr>
                    <th>Price</th>
                    <th>Quantity Demanded</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>R 70</td><td>20</td></tr>
                    <tr><td>R 50</td><td>30</td></tr>
                    <tr><td>R 30</td><td>40</td></tr>
                    <tr><td>R 20</td><td>50</td></tr>
                    <tr><td>R 10</td><td>70</td></tr>
                    <tr><td>R 5</td><td>90</td></tr>                
                </tbody>
                </table>
            </div>

                <DemGal imageWidth={1} />
            

            {/* <img src={ExampleDemand} 
                alt="Demand Curve Example" 
                width={800} 
                // height={300}
                class = "image-right"
                 /> */}
            </div>

            <div class="body">
            From this, we can see that as the price rises, the quantity demanded decreases (and vice versa). The downward slope of the demand curve illustrates the law of demand (As the price increases, the quantity demanded decreases, and conversely, as the price decreases, the quantity demanded increases.)
            </div>

            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="demand" 
                    checked={checkedSections.demand}
                    onChange={() => handleCheckSection('demand')}
                />
                <label htmlFor="demand" class="prog-label">Mark as completed</label>
            </div>

            <div class="subhead">
                Supply
            </div>

            <div class="body">
            When the term supply is used, it means the amount of goods or services a seller is willing to supply at each price. The total number of units a seller can supply to the market at a certain price is called the quantity supplied (or supply quantity).
            </div>

            <div>
            <figure>
            <img src={SupplyCurve} 
                alt="Supply Curve" 
                width={300} 
                height={300}
                />
                <figcaption class="fig-cap">The Supply Curve represents the producer’s (or seller’s) willingness to accept.</figcaption>
            </figure>
            </div>

            <div class="third-head">
            Let's look at an example
            </div>

            <div class="body">
                The <PopUp word="supply schedule" definition="Table that shows the quantity supplied at each price"/> is shown for the coffee market. From this, we can draw the Supply Curve.
            </div>
            
            <div class="content-wrapper">
            
            <div>
            <p class="body-c"> <PopUp word="How to draw?" definition="Click on the 'Draw Graph' button to see how the supply curve is drawn."/></p>
            
            <table>
                <thead>
                    <tr>
                    <th>Price</th>
                    <th>Quantity Supplied</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>R 5</td><td>5</td></tr>
                    <tr><td>R 10</td><td>30</td></tr>
                    <tr><td>R 20</td><td>50</td></tr>
                    <tr><td>R 30</td><td>70</td></tr>
                    <tr><td>R 50</td><td>80</td></tr>
                    <tr><td>R 70</td><td>90</td></tr>
                </tbody>
                </table>
                </div>
            
                <SupGal imageWidth={1} />

                {/* <img src={ExampleSupply} 
                alt="Supply Curve Example" 
                width={800} 
                // height={300}
                class = "image-right"
                     /> */}
            </div>

            <div class="body">
                 From this, we can see that as the price rises, the quantity supplied increases (and vice versa). The upward slope of the supply curve illustrates the law of supply (As the price increases, the quantity supply increases, and conversely, as the price decreases, the quantity supplied decreases.)
            </div>

            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="supply" 
                    checked={checkedSections.supply}
                    onChange={() => handleCheckSection('supply')}
                />
                <label htmlFor="supply" class="prog-label">Mark as completed</label>
            </div>

            <div class="subhead">
                The Market and the Equilibrium Price:
            </div>

            <div class="body">
            Since both curves have price on the vertical axis and quantity on the horizontal axis, the demand curve and the supply curve can appear on the same graph.
            <br/>
            Let’s combine the two curves to illustrate the interaction of demand and supply in the market for coffee.
            </div>

            <div>
            <figure>
            <img src={SupDemCurve} 
                alt="Supply and Demand Curve" 
                width={400} 
                height={300}
                />
            </figure>
            </div>
            
            <div class="content-wrapper">
                <img src={ExampleSupDem} 
                    alt="Example Supply and Demand Curve" 
                    width={400} 
                    // height={300}
                    class = "image-right"
                    />

                <div class="body-example">
                Together, this graph can be used to determine the price and quantity that will be bought and sold in a market.
                <br/>
                The point where the demand curve (D) and the supply curve (S) intersect is called the equilibrium point (E).
                <br/>
                This  point is the only price where the quantity demanded is equal to the quantity supplied.
                <br/>
                This is the point where both the consumer and the sellers agree. We call this the equilibrium price and the equilibrium quantity.
                <br/>
                A price above equilibrium causes the quantity supplied to exceed the quantity demanded. This causes a surplus in the market.
                <br/>
                A price below equilibrium causes the quantity supplied to be less than the quantity demanded. This causes a shortage in the market.
                </div>

            </div>

            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="marketeq" 
                    checked={checkedSections.marketeq}
                    onChange={() => handleCheckSection('marketeq')}
                />
                <label htmlFor="marketeq" class="prog-label">Mark as completed</label>
            </div>

            <div class="subhead">
                Shifts in Demand and Supply for Goods and Services
            </div>

            <div class="body">
                There are several factors that change how the...
            </div>

            <div class="third-head">
                Changes in Demand
            </div>

            <div>
            <table class="bigtable">
                <thead>
                    <tr>
                    <th>Increase in Demand</th>
                    <th>Decrease in Demand</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>An increase in demand will shift the demand curve outwards (to the right):
                        <ul class="indented-list">
                            <li>Equilibrium Price Increases</li>
                            <li>Equilibrium Quantity increases</li>
                            <li>Creates excess in demand</li>
                        </ul>
                    </td>
                    <td>A decrease in demand will shift the demand curve inward (to the left):
                        <ul class="indented-list">
                            <li>Equilibrium Price Decreases</li>
                            <li>Equilibrium Quantity Decreases</li>
                            <li>Creates shortage in demand</li>
                        </ul></td>
                    </tr>
                    <tr>
                    <td>
                        <img src={InDemFact} 
                            alt="Factors that increase demand" 
                            width={400} 
                            height={300}
                            class="center-pic"
                        />
                    </td>
                    <td>
                    <img src={DecDemFact} 
                            alt="Factors that decrease demand" 
                            width={400} 
                            height={300}
                            class="center-pic"
                        />
                    </td>
                    </tr>
               
                </tbody>
                </table>
            </div>


            <div class="third-head">
                Changes in Supply
            </div>

            <div>
            <table class="bigtable">
                <thead>
                    <tr>
                    <th>Increase in Supply</th>
                    <th>Decrease in Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>An increase in supply shifts the supply curve outwards (to the right):
                        <ul class="indented-list">
                            <li>Equilibrium Price Decreases</li>
                            <li>Equilibrium Quantity increases</li>
                            <li>This creates an excess supply</li>
                        </ul>
                    </td>
                    <td>A decrease in supply shifts the supply curve inward (to the left):
                        <ul class="indented-list">
                            <li>Equilibrium Price Increases</li>
                            <li>Equilibrium Quantity Decreases</li>
                            <li>This creates a shortage in supply</li>
                        </ul></td>
                    </tr>
                    <tr>
                    <td>
                        <img src={InSupFact} 
                            alt="Factors that increase supply" 
                            width={400} 
                            height={300}
                            class="center-pic"
                        />
                    </td>
                    <td>
                    <img src={DecSupFact} 
                            alt="Factors that decrease supply" 
                            width={400} 
                            height={300}
                            class="center-pic"
                        />
                    </td>
                    </tr>
               
                </tbody>
                </table>
            </div>

            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    id="shifts" 
                    checked={checkedSections.shifts}
                    onChange={() => handleCheckSection('shifts')}
                />
                <label htmlFor="shifts" class="prog-label">Mark as completed</label>
            </div>


            <div>
                 <Link to="/Quiz_1" >
                    <button class="quiz-button">
                    Take Quiz
                    </button>
                </Link>
            </div>


            



            
            
        </div>
        </>
    );

};

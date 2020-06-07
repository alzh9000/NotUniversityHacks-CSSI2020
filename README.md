# NotUniversityHacks-CSSI2020
GitHub repo for NotUniversityHacks for the CSSI 2020 Team! :)

## Elevator Pitch:
A web app that uses AI and machine learning to predict future droughts and teaches people how to contribute to water sustainability to combat droughts.

## Inspiration
Droughts are a huge problem around the world, and a big issue with combating droughts is that many people are unaware of when they will strike next and what they can do to help. We wanted to make a simple and convenient app that tells people when the next drought will occur in their region and what they can do to help. This way, we can have a nationwide effect on droughts by inspiring people to take action in their communities.

## What it does
Dropredictor uses artificial intelligence to predict when the next drought will occur in the 50 states, plus Washington D.C and Puerto Rico, to motivate people to take action in their communities to conserve water and prevent droughts.

## How I built it
We wanted to use artificial intelligence to analyze data of past droughts in the 50 states, plus Washington D.C. and Puerto Rico, by specifically using machine learning to perform time series regression. We decomposed the time series into trends and seasonal patterns, then fit a sine function to the seasonal pattern in order to determine the periodicity of the seasonal droughts. Based on the period, which is how much time there is between consecutive droughts, we are able to find the number of years until the next drought occurs. 

Using this information, we present the amount of time until the next drought in a region in the style of a countdown in order to encourage people to pay more attention to water sustainability to help combat the drought.

## Challenges I ran into
One of the biggest challenges we ran into was aggregating the data since droughts are classified by 5 levels of severity, and the data we used had percentages of land experiencing the minimum level of droughts. We were able to overcome this challenge by having our machine learning focus on predicting when there would be a significant spike in the level of percentages of land covered by droughts because that is the best indicator for the start of a serious drought occurring. For example, the severe drought in California from 2011 to 2017 was represented by a large increase in the percentage of land experiencing drought in California in the data we had, so by looking for patterns in these spikes we can better predict when droughts would begin in the future.  

A challenge we had in using time series regression to model the drought data was that the drought data varied significantly from state to state, and even the seasonal patterns were different, so the strategy we used to analyze the data had to be generalizable. We accomplished this by using our machine learning to curve fit a sine function, because sine functions can be used to represent any periodic functions. Thus, we were able to model the periodicity of the many different data sets we had pretty well using the same curve fit.   

Working together remotely was another challenge we faced, but we were able to overcome this by video calling and having strong communication. Our teamwork helped us persevere despite us being unable to meet in person. :)

## Accomplishments that I'm proud of
We’re really proud of creating an app that’s beneficial to society and helps people with the serious issue of droughts. We feel like we managed to create a simple yet pretty design for our web app, while also providing all the functionality to help people deal with droughts and learn more about sustainability. Additionally, we’re proud of being able to use AI and machine learning to model something like this, especially under such a short time frame. It was a challenging experience, but we learned a lot from it. We think the name Dropredictor is pretty cool too, and we set up a domain for it at http://dropredictor.tech/ using Domain.com. 

## What I learned
We learned a lot about modeling data, and how to best visualize data to effectively communicate our ideas to a larger audience. We also learned a lot about plotting and decomposing data, as well as time series regression. It was also a lot of fun learning more about how to conserve water usage and contribute to sustainability and help the environment. Beyond learning these concepts, we also feel like we improved our remote work and communication skills through hacking together remotely. 

## What's next for Dropredictor
In addition to being able to predict when the next drought would happen, we want Dropredictor to show how individuals affect water sources and the environment around them. Our next steps for Dropredictor would be to ask users to input their water habits and illustrate how their water footprint affects the availability of water. Our web app would advise users on how they can reduce their water usage and lower their water footprint. We could also create 



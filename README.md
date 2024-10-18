# Awesome Polis [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

:construction: Until this line is removed, please consider this a work-in-progress.

[Full spreadsheet of all known resources][spreadsheet]

<!-- Links -->
   [spreadsheet]: https://docs.google.com/spreadsheets/d/1PNlYoIyN1_jS7CpHDImHcA8qW4UFuEDLVZe0p_C6V0w/edit#gid=0

> Useful resources for using [Polis](https://pol.is/home) and building things on top of it

----
_Unlike some Awesome Lists, since the Polis development and practitioner
community is rather nascent and disconnected, this list will start off as very
COMPREHENSIVE, rather than CURATED. This means it will include code or projects
even marginally related to Polis. This will include non-functional projects. At
some point, once there is more maturity in the ecosystem, inactive or
incomplete projects will likely migrated in a less prominent collaborative
spreadsheet also listed amongst these resources._

## Table of Contents

- [Maintainers](#maintainers)
- [Contribute](#contribute-to-this-list)
- [Collab-Cluster](#collab-cluster)
- [Forks & Deployments](#forks-deployments)
- [Official](#official)
- [Uncategorized](#uncategorized)
- [Discussions](#discussions)
- [Want to hack on IPFS?](#want-to-hack-on-ipfs)
- [License](#license)

## Maintainers

:construction: This section is a work-in-progress.

~~Maintainers requested! This repo is not currently under active development nor maintenance and requires more support from the community.~~

## Contribute to this list!

:construction: This section is a work-in-progress.

~~Everyone is welcome to submit their new awesome-ipfs item, but it will be accepted only if it meets our [content policy](https://github.com/ipfs/awesome-ipfs/blob/master/POLICY.md).~~

Readme and the website are automatically generated. In order to add an element to this list, you need to modify the files in `/data` and then run  `make build` before publishing your pull request. Read [contributing guidelines](https://github.com/ipfs/awesome-ipfs/blob/master/CONTRIBUTING.md) to learn how to do so.

## Forks & Deployments

- [Demdis](https://www.demdis.sk/) - A Slovakian fork seeking to build a community around better ways of engaging in divisive conversations. [Source](https://github.com/Demdis/polis)
- 2020-08: [Demos UK](https://demos.co.uk/research/polis-and-the-political-process/) - Polis fork run by the UK thinktank Demos. [Source](https://github.com/Demos-thinktank/polis/tree/demos-dev)
- [Metropolis](https://poll.fil.org) - A new Polis frontend and collective-response tool, funded for Filecoin governance and integrated with GitHub. [Source](https://github.com/canvasxyz/metropolis)
- [Pushing Together (EJ Platform)](https://www.ejparticipe.org/) - A comprehensive platform an funded project to create a social participation app based on Polis. [Source](https://github.com/ejplatform)
- [Tolerance Carousel](https://github.com/tolerance-carousel/polis_tolerance-carousel) - Code for deployed fork of Polis that paired with the Tolerance Carousel project.

## Official

- [Guide: Integrating Polis with Citizens Assemblies](https://compdemocracy.org/polis/book/lottery-selected-assemblies/) - A guide for those who are thinking about the interaction between techniques for listening at scale and in-person deliberation
- [Official Guide to Polis Methods v1](https://compdemocracy.org/polis/book/introduction/) - The table of contents for an incomplete stub of a currently unpublished Polis book.
- 2023-06-20: [Opportunities and Risks of LLMs for Scalable Deliberation with Polis](https://www.researchgate.net/publication/371758108_Opportunities_and_Risks_of_LLMs_for_Scalable_Deliberation_with_Polis) - An official collaborative paper with AnthropicAI, on applying LLMs to Polis outputs and processes.
- [Pol.is](https://pol.is/home) - Open Source AI for large scale open ended feedback [Source](https://github.com/compdemocracy/polis)
- [Polis Embed Examples]() - Examples illustrating how to embed a Polis conversation in another website.
- [Polis Knowledge Base](https://compdemocracy.org/knowledge-base) - The Computational Democracy Project maintains an extensive (and growing) knowledge base for Polis and related facilitation methods.
- 2021-04-29: [Polis: Scaling Deliberation by Mapping HighDimensional Opinion Spaces](https://www.e-revistes.uji.es/index.php/recerca/article/view/5516/6558) - The authoritative paper on Polis internals and math.
- 2022-11-24: [“Coherent Mode” for the World’s Public Square](https://arxiv.org/abs/2211.12571) - An official paper proposing modification to Twitter's Community Notes UI to support deliberative process.

## Uncategorized

- [DigiFinland Polis tools v1](https://www.sitra.fi/en/projects/polis-platform-experiments/) - Set of deploy scripts, settings files, custom patches, translations and utilities for running Polis experiment deployments for DigiFinland. [Source](https://github.com/jylaroti/polis-digifinland-tools/)
- [DigiFinland Polis tools v2](https://www.sitra.fi/en/projects/polis-platform-experiments/) - Set of deploy scripts, settings files, custom patches, translations and utilities for running Polis experiment deployments for DigiFinland. [Source](https://github.com/polis-digifinland/polis-digifinland)
- [Generative Policy](https://github.com/QuantumArjun/generative-policy) - A research project to help create simulated preliminary policy recommendations, by simulating a Polis engagement with LLMs.
- 2018-12: [Holopolis Map](https://holopolis-map.pdis.tw/) - Web mobile app that through geolocalization and the use of stickers with QR codes promotes democractic deliberation processes everywhere in the world. [Source](https://github.com/PDIS/Holopolis-Map)
- [LegSim](https://www.polisci.washington.edu/research/projects/legsim-legislative-simulation-wwwlegsimorg) - A defunct virtual legislature platform founded in 2001 that integrated Polis. [Source](https://github.com/UWLegSim/legsim-public/)
- [Participa infra](https://github.com/participa-lab/plataforma) - Deployment scripts for deploying Participa platform alongside a self-hosted Polis instance.
- [Participa platform](https://participalab.uy/#polarizacion) - Alternative Polis administration app written in Python's Django framework. For self-hosted Polis conversations, aims to improve the interface, and add user management, without forking its Polis core. [Source](https://github.com/participa-lab/plataforma)
- [Polis IRL: Mobile NFC voting app](https://github.com/patcon/polis-like-nfc) - A prototype React-Native mobile app for IRL voting in Polis conversations via scanning assigned NFC stickers.
- 2021-01: [Polis link prediction](https://github.com/ThenWho/pol-is-link-prediction) - A data exploration in Jupyter notebook.
- 2021-03: [Polis Math module walk-through](https://hackmd.io/@patcon/conversa-calls/https%3A%2F%2Fhackmd.io%2F%40patcon%2Fr1KpFakV_) - Notes from a walk-through of the Clojure math module of Polis, given by CompDem data scientist Chris Small during his technical office hours.
- [Polis Resources Spreadsheet](https://docs.google.com/spreadsheets/d/1PNlYoIyN1_jS7CpHDImHcA8qW4UFuEDLVZe0p_C6V0w/edit#gid=0) - The raw source material for this community-stewarded Awesome Polis directory.
- [Polis User Group (PUG)](https://hackmd.io/@patcon/conversa-calls/) - Landing page for a unofficial community for users and fans of the Polis software project, for anyone eager to explore the tool/processes, including prospective conversation moderators & participants, as well as self-hosted server administrators.
- [Polis User Group (PUG) Discord](https://discord.com/invite/wFWB8kzQpP) - An unofficial Discord server for the Polis User Group (PUG). See PUG entry for details.
- 2024-06: [polis-moderator-hotkey](https://github.com/CivicTechTO/polis-moderator-hotkey) - A Chrome extension allow polis moderator to accept/reject comments with hotkeys
- [Storybook: Polis](https://civictechto.github.io/polis-storybook/) - A "storybook" instance to display frontend UI components from Polis and its forks, to allow more collaboration and experimentation on UX and accessibility improvements. [Source](https://github.com/CivicTechTO/polis-storybook)
- [Talk to the City (tttc-light-js)](https://ai.objectives.institute/talk-to-the-city) - The codebase for generating reports. Talk to the City is an open-source LLM interface for improving collective deliberation and decision-making by analyzing detailed, qualitative data. It aggregates responses and arranges similar arguments into clusters. [Source](https://github.com/AIObjectives/tttc-light-js)
- [talk-to-the-city-reports](https://talktothecity.org/) - Sample reports generated by Talk to the City, an open-source LLM survey tool to improve collective discourse and decision-making by analyzing detailed qualitative responses to questions and generating an easy-to-navigate report based on the input data. [Source](https://github.com/AIObjectives/talk-to-the-city-reports)
- [Tolerance Carousel](http://web.archive.org/web/20230908152124/https://www.reinwardt.ahk.nl/en/research-group-cultural-heritage/projects/project/0/re-tracing-history/) - An interactive exhibit that integrated a fork of Polis into a multimedia Virtual Agora in-person event. [Source](https://github.com/tolerance-carousel/tolerance-carousel)
- [Viewpoints.xyz](https://viewpoints.xyz/) - New UI experiment for a Polis-like platform. [Source](https://github.com/Goodheart-Labs/polislike)
- [WePublish](https://wepublish.ch/fr/) - Open Source Headless CMS for Publishers and News Rooms, integrating Polis. Created in Switzerland. [Source](https://github.com/wepublish/wepublish)

## Discussions

:construction: This section is a work-in-progress.

## Want to hack on Polis?

:construction: This section is a work-in-progress.

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
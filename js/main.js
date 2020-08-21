// Begin Hover Effect
function hover() {
    let projectLatest = document.querySelectorAll('.latest-project img'),
        projectInfo = document.querySelectorAll('.project-info'),
        hoverLink = document.querySelectorAll('.fa-link'),
        zoomIcon = document.querySelectorAll('.fa-search');

    for (let i = 0; i < projectLatest.length; i++) {
        projectLatest[i].addEventListener('mouseover', () => {
            projectLatest[i].style.transition = '0.5s';
            projectLatest[i].style.opacity = '0.5';
            projectInfo[i].style.background = '#362f2d';
            hoverLink[i].style.display = 'block';
            zoomIcon[i].style.display = 'block';
        });

        projectLatest[i].addEventListener('mouseout', () => {
            projectLatest[i].style.transition = '0.5s';
            projectLatest[i].style.opacity = '1';
            projectInfo[i].style.background = '#fbfaf8';
            hoverLink[i].style.display = 'none';
            zoomIcon[i].style.display = 'none';
        });
    }

    for (let i = 0; i < projectInfo.length; i++) {
        projectInfo[i].addEventListener('mouseover', () => {
            projectInfo[i].style.transition = '0.5s';
            projectInfo[i].style.background = '#362f2d';
            projectLatest[i].style.opacity = '0.5';
            hoverLink[i].style.display = 'block';
            zoomIcon[i].style.display = 'block';
        });

        projectInfo[i].addEventListener('mouseout', () => {
            projectInfo[i].style.transition = '0.5s';
            projectInfo[i].style.background = '#fbfaf8';
            projectLatest[i].style.opacity = '1';
            hoverLink[i].style.display = 'none';
            zoomIcon[i].style.display = 'none';
        });
    }

    for (let i = 0; i < hoverLink.length; i++) {
        hoverLink[i].addEventListener('mouseover', () => {
            projectInfo[i].style.transition = '0.5s';
            projectInfo[i].style.background = '#362f2d';
            projectLatest[i].style.opacity = '0.5';
            hoverLink[i].style.display = 'block';
            zoomIcon[i].style.display = 'block';
        });
    }

    for (let i = 0; i < zoomIcon.length; i++) {
        zoomIcon[i].addEventListener('mouseover', () => {
            projectInfo[i].style.transition = '0.5s';
            projectInfo[i].style.background = '#362f2d';
            projectLatest[i].style.opacity = '0.5';
            hoverLink[i].style.display = 'block';
            zoomIcon[i].style.display = 'block';
        });
    }

    let postItem = document.querySelectorAll('.post-item img'),
        postInfo = document.querySelectorAll('.post-info'),
        postTite = document.querySelectorAll('.post-item-title');

    for (let i = 0; i < postItem.length; i++) {
        postItem[i].addEventListener('mouseover', () => {
            postItem[i].style.transition = '0.5s';
            postItem[i].style.opacity = '0.5';
            postInfo[i].style.background = '#362f2d';
            postTite[i].style.color = '#c7b299';
        });

        postItem[i].addEventListener('mouseout', () => {
            postItem[i].style.transition = '0.5s';
            postItem[i].style.opacity = '1';
            postInfo[i].style.background = '#fff';
            postTite[i].style.color = '#000';
        });
    }

    for (let i = 0; i < postInfo.length; i++) {
        postInfo[i].addEventListener('mouseover', () => {
            postInfo[i].style.transition = '0.5s';
            postInfo[i].style.background = '#362f2d';
            postItem[i].style.opacity = '0.5';
            postTite[i].style.color = '#c7b299';
        });

        postInfo[i].addEventListener('mouseout', () => {
            postInfo[i].style.transition = '0.5s';
            postInfo[i].style.background = '#fff';
            postItem[i].style.opacity = '1';
            postTite[i].style.color = '#000';
        });
    }

    let postDate = document.querySelectorAll('.posts-date'),
        postDescription = document.querySelectorAll('.posts-description');

    for (let i = 0; i < postDescription.length; i++) {
        postDescription[i].addEventListener('mouseover', () => {
            postDate[i].style.transition = '0.5s';
            postDate[i].style.color = '#fff';
            postDescription[i].style.color = '#c7b299';
            postDescription[i].style.transition = '0.5s';
        });

        postDescription[i].addEventListener('mouseout', () => {
            postDate[i].style.transition = '0.5s';
            postDate[i].style.color = '#363636';
            postDescription[i].style.color = '#555555';
            postDescription[i].style.transition = '0.5s';
        });
    }
}
hover();
// End Hover

// --> Begin WOW
$(document).ready(function () {
    new WOW().init();
});
// --> End WOW
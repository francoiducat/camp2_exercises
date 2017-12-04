curl -X POST "https://postman-echo.com/post" -d '{"foo":"bar"}' --header "Content-Type:application/json" | jq '.json' > 03_postman_api_post.result

const test = `This is ApacheBench, Version 2.3 <$Revision: 1706008 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /
Document Length:        0 bytes

Concurrency Level:      5
Time taken for tests:   0.054 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      0 bytes
HTML transferred:       0 bytes
Requests per second:    1848.77 [#/sec] (mean)
Time per request:       2.704 [ms] (mean)
Time per request:       0.541 [ms] (mean, across all concurrent requests)
Transfer rate:          0.00 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     0    2   3.5      1      14
Waiting:        0    0   0.0      0       0
Total:          1    2   3.5      1      14

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      2
  75%      2
  80%      2
  90%      3
  95%     14
  98%     14
  99%     14
 100%     14 (longest request)
`
